(function () {
    var d = document;
    var c = {
        COCOS2D_DEBUG: 2, 
        box2d: true, 
        showFPS: true,
        frameRate: 60,
        tag: 'viewport',
        SingleEnginFile: 'cocos2dx.min.js',
		loadExtension:true,

        
        appFiles: ['resources.js', 'b2.js', 'game.js', 'main.js']
    };
    window.addEventListener('DOMContentLoaded', function () {
        var s = d.createElement('script');
        s.src = c.SingleEnginFile;
        
        d.body.appendChild(s);
        s.c = c;
        s.id = 'cocos2d-html5';
    });
})();