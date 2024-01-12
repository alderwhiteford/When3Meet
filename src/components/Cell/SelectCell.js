import styled from "@emotion/styled";
import { TableCell } from "@mui/material";
import { useEffect, useState } from "react";

export default function SelectCell({ epochTime, isMouseDown, isHour, setTime }) {
  const [selected, setSelected] = useState(false);
  const [mouseEntered, setMouseEntered] = useState(false);

  useEffect(() => {
    if (selected) {
      setTime((times) => {
        times.add(epochTime);
        return times;
      })
    } else {
      setTime((times) => {
        times.delete(epochTime);
        return times;
      })
    }
  }, [epochTime, selected, setTime])

  const handleMouseEnter = () => {
    if (!mouseEntered && isMouseDown) {
      setSelected(!selected);
      setMouseEntered(true)
    }
  }

  const handleMouseLeave = () => {
    setMouseEntered(false)
  }

  const StyledDiv = styled.div({
    display: 'flex',
    position: 'relative',
    alignContent: 'center',
    justifyContent: 'center',
    height: '17.5px',
  })
  
  return (
    <TableCell 
      sx={{ 
        padding: '0',
        backgroundColor: selected ? '#97c9a5' : 'white',
        border: 1,
        borderColor: '#C1C1C1',
        borderTopStyle: selected ? '' : 'dashed',
        borderBottom: isHour ? 1 : 0,
        zIndex: selected ? 1 : 0
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseUpCapture={handleMouseLeave}
    >
      <StyledDiv />
    </TableCell>
  )
}
