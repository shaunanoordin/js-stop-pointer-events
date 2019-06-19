class App {
  constructor () {
    this.console = document.getElementById('console');
    this.canvas = document.getElementById('canvas');
    this.canvas2d = this.canvas.getContext('2d');
    this.canvas.addEventListener('pointerdown', this.handleEvent.bind(this));
    //this.canvas.addEventListener('pointermove', this.handleEvent.bind(this));
    this.canvas.addEventListener('pointerup', this.handleEvent.bind(this));
    this.canvas.addEventListener('touchstart', this.handleEvent.bind(this));
    this.canvas.addEventListener('touchmove', this.handleEvent.bind(this));
    this.canvas.addEventListener('touchend', this.handleEvent.bind(this));
  }
  
  handleEvent (e) {
    let text = 'Event: ';
    
    if (e.type) text += e.type + ' ';
    
    this.log(text);
    
    const x = this.offsetX;  // Warning: this doesn't figure out what happens when #canvas is squashed or stretcehd
    const y = this.offsetY;
    
    return stopDefaultEvent(e);
  }
  
  log (text) {
    this.console.textContent = text;
  }
}

function stopDefaultEvent (e) {
  e.preventDefault && e.preventDefault();
  e.stopPropagation && e.stopPropagation();
  e.returnValue = false;
  e.cancelBubble = true;
  return false;
}

function init () {
  window.app = new App();
}

window.onload = init;