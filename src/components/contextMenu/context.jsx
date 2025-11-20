import React, { Component } from 'react';
import './context.css'

class TextEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      fontWeight: 'normal',
      fontStyle: 'normal',
      textDecoration: 'none',
      color: '#000000',
      clicked: false
    };
  }

  handleTextChange = (e) => {
    this.setState({ text: e.target.innerText });
  };

  handleFontWeightChange = (e) => {
    this.setState({ fontWeight: e.target.value });
  };

  handleFontStyleChange = (e) => {
    this.setState({ fontStyle: e.target.value });
  };

  handleTextDecorationChange = (e) => {
    this.setState({ textDecoration: e.target.value });
  };

  handleColorChange = (e) => {
    this.setState({ color: e.target.value });
  };

  clearText = () => {
    this.setState({ text: '', fontWeight: 'normal', fontStyle: 'normal', textDecoration: 'none', color: '#000000' });
  };

  handelClick(){
    /*console.log('hello')
    this.setState(prevState => ({
        clicked: !prevState.clicked,
      }));*/
      this.props.onAdd()
  }

  render() {
    const { text, fontWeight, fontStyle, textDecoration, color } = this.state;

    return (
      <div className='contain-reviews'>
        {
            this.state.clicked && <div style={{ fontWeight: fontWeight, fontStyle: fontStyle, textDecoration: textDecoration, color: color }}>
            {text}
        </div>
        }
        <div className='text-editor'>
            <div className='label-and-select'>
                <label>
                    Font Weight:
                    <select value={fontWeight} onChange={this.handleFontWeightChange}>
                    <option value="normal">Normal</option>
                    <option value="bold">Bold</option>
                    <option value="bolder">Bolder</option>
                    <option value="lighter">Lighter</option>
                    </select>
                </label>
                <label>
                    Font Style:
                    <select value={fontStyle} onChange={this.handleFontStyleChange}>
                    <option value="normal">Normal</option>
                    <option value="italic">Italic</option>
                    <option value="oblique">Oblique</option>
                    </select>
                </label>
                <label>
                    Text Decoration:
                    <select value={textDecoration} onChange={this.handleTextDecorationChange}>
                    <option value="none">None</option>
                    <option value="underline">Underline</option>
                    <option value="line-through">Line-through</option>
                    </select>
                </label>
                <label>
                    Color:
                    <input
                    type="color"
                    value={color}
                    onChange={this.handleColorChange}
                    />
                </label>
                <button className='clear' onClick={this.clearText}>Clear</button>
                </div>
                <div
                contentEditable
                onInput={this.handleTextChange}
                style={{
                    border: '1px solid #ccc',
                    padding: '10px',
                    minHeight: '100px',
                    fontWeight: fontWeight,
                    fontStyle: fontStyle,
                    textDecoration: textDecoration,
                    color: color,
                    borderRadius: '20px',
                    height: '250px'
                }}
                >
                {text}
                </div>
                <div className='contain-add'>
                    <button className='add' onClick={this.handelClick.bind(this)}>add to Review</button>
                </div>
            </div>
          
      </div>
    );
  }
}

export default TextEditor;