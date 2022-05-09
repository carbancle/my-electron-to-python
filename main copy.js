const { app, BrowserWindow, systemPreferences } = require('electron')

function createWindow() {
    var python = require('child_process').spawn('python', ['./hello.py']);
    python.stdout.on('data', function(data){
      console.log("data: ",data.toString('utf8'));
    });

    

    
    // var pyshell = require('python-shell');
    
    // es6 이하 문법 기준 options 값이 필요
    // var options = {
    //     mode: 'text',
    //     pythonPath: '',
    //     pythonOptions: ['-u'],
    //     scriptPath: '',
    //     args: []
    // };
    /* 
        es6 이하 문법 기준 pyshell.PythonShell.run('*.py', options, function(err, result){})
        es6의 경우 pyshell.run('*.py', function(err, result){}) 로 설정 가능
    */
    // pyshell.PythonShell.run('hello.py', options, function (err, results) {
    //     if(err) throw err;
    //     console.log('hello.py finished.');
    //     console.log('results', results);
    // });

    window = new BrowserWindow({width: 800, height: 600})

    window.loadFile('index.html')
  }

  app.whenReady().then(() => {
      createWindow()
  })