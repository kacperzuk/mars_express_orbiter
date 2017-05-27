if ( ! Detector.webgl ) Detector.addGetWebGLMessage();

var camera, controls, scene, renderer;
var satellite, mars, sunarrow;
var elipse;
var light, dlight;

init();
render(); // remove when using next line for animation loop (requestAnimationFrame)
animate();

function telipse(t) {
    var a = 30;
    var b = 37;
    return new THREE.Vector2(a*Math.cos(t), b*Math.sin(t));
}

function genpoints() {
    var ppp = [];
    for (var t = 0; t <= 2*Math.PI; t += Math.PI/20) {
        ppp.push(telipse(t));
    }
    return ppp;
}

function polyline(points) {
    var shape = new THREE.Shape(points);
    shape.autoClose = true;
    var geometry = shape.createPointsGeometry();
    var line = new THREE.Line(geometry, new THREE.LineBasicMaterial({color: "blue"}));
    return line;
}

function init() {

    scene = new THREE.Scene();
    scene.fog = new THREE.Fog( 0x111111, 0.00001, 0 );

    var manager = new THREE.LoadingManager();
    manager.onProgress = function( item, loaded, total ) {
        console.log( item, loaded, total );
    };

    var onProgress = function( xhr ) {
        if ( xhr.lengthComputable ) {
            var percentComplete = xhr.loaded / xhr.total * 100;
            console.log( Math.round( percentComplete, 2 ) + '% downloaded' );
        }
    };

    var onError = function( xhr ) {
        console.error( xhr );
    };

    var loader = new THREE.AssimpJSONLoader( manager );
    loader.load( 'img/satellite.json', function( object ) {
        var material = new THREE.MeshPhongMaterial( { color: 0x999999, specular: 0x111111, shininess: 200 } );
        object.position.set (25, 0, 0);
        object.rotation.set(0,0,0);
        object.traverse(function (child) {
            if (child instanceof THREE.Mesh) {
                child.material = material;
                child.geometry.translate(5.35,-14,-4);
                child.geometry.scale(0.1,0.1,0.1);
            }
        });

        satellite = object;
        scene.add( object );
    }, onProgress, onError );

    var container = document.getElementById( 'container' );

    renderer = new THREE.WebGLRenderer({ antialias: false });
    renderer.setClearColor( scene.fog.color );
    renderer.setPixelRatio( window.devicePixelRatio );
    renderer.setSize( container.clientWidth, window.innerHeight );

    container.appendChild( renderer.domElement );

    camera = new THREE.PerspectiveCamera( 60, container.clientWidth / window.innerHeight, 1, 1000 );
    camera.position.z = 50;

    controls = new THREE.OrbitControls( camera, renderer.domElement );
    controls.addEventListener( 'change', render ); // remove when using animation loop
    controls.enableZoom = true;
    var marstexture = new THREE.TextureLoader().load( "img/mars.gif" );
    var geometry = new THREE.SphereGeometry( 22, 32, 32 );
    var material =  new THREE.MeshPhongMaterial( { color:0xffffff, map: marstexture } );

    mars = new THREE.Mesh( geometry, material );
    mars.position.x = ( 0 ) * 1000;
    mars.position.y = ( 0 ) * 1000;
    mars.position.z = ( 0 ) * 1000;
    scene.add( mars );

    sunarrow = new THREE.ArrowHelper(
        new THREE.Vector3(-1, 0, 0),
        new THREE.Vector3(60, 0, 0),
        25, 0xeeeee88 );
    scene.add(sunarrow);

    elipse = polyline(genpoints());
    elipse.position.set(0,-8,5);
    elipse.rotation.x += -10 * Math.PI/180;
    scene.add(elipse);

    // lights

    dlight = new THREE.DirectionalLight( 0xffffff );
    dlight.position.set( 30, 0, 0 );
    scene.add( dlight );

    light = new THREE.AmbientLight( 0x222222 );
    scene.add( light );


    window.addEventListener( 'resize', onWindowResize, false );

}

function onWindowResize() {
    var container = document.getElementById( 'container' );

    camera.aspect = container.clientWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize( container.clientWidth, window.innerHeight );

}

function animate() {

    requestAnimationFrame( animate );

    if (satellite) {
        var v2d = telipse(-timestamp);
        var v3d = new THREE.Vector3(v2d.x, v2d.y, 0);
        v3d.y -= 8;
        v3d.z += 3;
        v3d.applyAxisAngle(new THREE.Vector3(1,0,0), -10*Math.PI/180);
        satellite.position.set(v3d.x, v3d.y, v3d.z);
        satellite.rotation.x = timestamp/7;
        satellite.rotation.y = timestamp/13;
        satellite.rotation.z = timestamp/17;
    }

    if (mars) {
        mars.rotation.y = timestamp/5;
    }

    if (sunarrow) {
        var t = timestamp/40;
        var x = 60*Math.cos(t);
        var y = 60*Math.sin(t);
        sunarrow.position.set(x,0,y);
        sunarrow.setDirection(new THREE.Vector3(-Math.cos(t),0,-Math.sin(t)));
        dlight.position.set(x,0,y);
    }

    controls.update(); // required if controls.enableDamping = true, or if controls.autoRotate = true

    render();
}

function render() {
    renderer.render( scene, camera );
}
