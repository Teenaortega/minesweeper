import React from 'react'
export default function Cell({details,updateFlag,revealcell}) {
    const style={
        cellStyle:{
            width:40,
            height:40,
            backgroundColor:details.revealed && details.value!==0?details.value==='X'?'red':' #00226d':details.revealed&&details.value===0?'#FFAB00':'#000',
            opacity:'0.8',
            border:'3px solid white',
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            fontSize:'20px',
            cursor:'pointer',
            color:'yellow',
            fontWeight:'1000'
        },
    }

    
    const click=()=>{
        // calling revealcell for specific cell x and y
        revealcell(details.x,details.y);  
    }
    
    // Right Click Function
    
    const rightclick=(e)=>{
        updateFlag(e,details.x,details.y)
    }
    // rendering the cell component and showing the different values on right and left clicks 
    
    return (
        <div style={style.cellStyle} onClick={click} onContextMenu={rightclick}>
            {!details.revealed && details.flagged ? (
        "🚩"
      ) : details.revealed && details.value !== 0 ? (
        details.value === "X" ? (
          "🎁"
        ) : (
          details.value
        )
      ) : (
        ""
      )}
        </div>
    )
}