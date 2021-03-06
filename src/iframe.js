import React, { PureComponent } from 'react';

export default class Iframe extends PureComponent {

  receiveMessageFromIframe ( event ) {
    if (!event.data.startsWith('setImmediate')){  // React will send message started with setImmediate
      console.log("parent received", event.data);
      const results = document.getElementById('results');
      results.innerHTML += event.data + '<br>';
    }
  }

  componentDidMount () {
    window.addEventListener("message", this.receiveMessageFromIframe, false);  // "message" name cannot be changed
  }

  handleParentClick = () => {
    //必须是iframe加载完成后才可以向子域发送数据
    const childFrameObj = document.getElementById('myFrame');
    childFrameObj.contentWindow.postMessage("This is parent", '*');
    console.log("iframe height", childFrameObj.contentWindow.document.body.offsetHeight);
    childFrameObj.height = childFrameObj.contentWindow.document.body.offsetHeight + 60;  // there will be some margin and stylistic height
    console.log("iframe window", childFrameObj.contentWindow);
    console.log("iframde document", childFrameObj.contentWindow.document);
    console.log("iframe html", childFrameObj.contentWindow.document.documentElement);
  }

  render () {
    

    return (
      <div>
        <custom-element></custom-element>
        <h1>Parent</h1>
        <p>Send Message <button id="message_button" onClick={this.handleParentClick.bind(this)}>Hi child</button></p>
        <span>Show Message </span>
        <div id='results'></div>
        <iframe
          id="myFrame"
          width="100%"
          height={0}
          frameBorder={1}
          scrolling="no"
          srcDoc="
          <h1>myFrame</h1>
          <p>Send Message: <button id='message_button'}>Hi parent</button></p>
          <span>Show Message</span>
          <div id='results'></div>
          <script>
              function receiveMessageFromParent ( event ) {
                let results = document.getElementById('results');
                results.innerHTML += event.data + '<br>';
              };
              window.addEventListener('message', receiveMessageFromParent, false);

              let messageButton = document.getElementById('message_button');
              /* console.log('msg button', messageButton); annoataion cannot use \/\/  */
              messageButton.addEventListener('click', function (e) {
                console.log('iframe send msg');
                console.log('parent', window.parent);
                console.log('top container', window.top);
                window.parent.postMessage('This is child', '*');
              }, false);
          </script>
          "
        />
      </div>
    );
  }
}
