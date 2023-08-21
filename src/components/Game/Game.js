import React from 'react'
import Button from '@mui/material/Button';
import SignatureCanvas from 'react-signature-canvas'

import './Game.css'

var canvasRef = React.createRef();
var deleteLines = [];
var penColor = "#000";

function Game() {
  return (
    <main className='navy'>
      <Button variant="contained" onClick={() => {
        if (canvasRef.isEmpty()) return;
        let data = canvasRef.toData();
        deleteLines.push(data.pop());
        canvasRef.fromData(data);
      }}>一つ戻る</Button>

      <Button variant="contained" onClick={() => {
        if (deleteLines.length === 0) return;
        let data = canvasRef.toData();
        data.push(deleteLines.pop())
        canvasRef.fromData(data);
      }}>一つ進む</Button>

      <Button variant="contained" onClick={() => {
        canvasRef.clear()
      }}>全消し</Button>

      
    <div className='canvas'>
      <SignatureCanvas
        ref={(ref) => { canvasRef = ref }}
        penColor={penColor}
        canvasProps={{ width: 500, height: 500 }}
        backgroundColor='#fff'
        onBegin={() => {
            deleteLines = [];
        }}
      />
        </div>
      </main>
  )
}

export default Game
