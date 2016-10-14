'use strict';

// �A�v���P�[�V�������R���g���[�����郂�W���[��
var electron = require('electron');
var app = electron.app;
var BrowserWindow = electron.BrowserWindow;

// ���C���E�B���h�E��GC����Ȃ��悤�ɃO���[�o���錾
let mainWindow;

// �S�ẴE�B���h�E��������I��
app.on('window-all-closed', function() {
  if (process.platform != 'darwin') {
    app.quit();
  }
});

// Electron�̏�����������Ɏ��s
app.on('ready', function() {
  // ���C����ʂ̕\��
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600
  });
  mainWindow.loadURL('file://' + __dirname + '/index.html');

  //�E�B���h�E������ꂽ��A�v�����I��
  mainWindow.on('closed', function() {
    mainWindow = null;
  });
});