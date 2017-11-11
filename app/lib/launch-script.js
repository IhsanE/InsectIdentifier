var bc = new BugController({'minBugs':20, 'maxBugs':50, 'canFly': false});
var sc = new SpiderController();

window.killAndRemoveBugs = () => {
    bc.killAll();
    sc.killAll();

    setTimeout(function(){    bc.end(); sc.end();  }, 5000);
}

