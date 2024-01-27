import styled from "@emotion/styled";
import { TableCell, Tooltip } from "@mui/material";

const StyledDiv = styled.div({
  display: 'flex',
  position: 'relative',
  alignContent: 'center',
  justifyContent: 'center',
  minHeight: '17.5px',
});

const StyledToolTipTitle = styled.h3({
  fontSize: '12.5px',
  margin: 0,
})

export default function DisplayCell({ epochTime, isHour, availability, users, isOptimal }) {
  let opacity = availability ? (availability.length / Object.keys(users).length) : 0
  opacity = isOptimal ? 1 : opacity
  
  const generateTooltipTitle = () => {
    if (!availability || availability.length === 0) {
      return <StyledToolTipTitle>Nobody available</StyledToolTipTitle>;
    }

    return (
      <div>
        <StyledToolTipTitle>
          People Available:
        </StyledToolTipTitle>
        {availability.map((userId) => 
          <div key={userId} style={{marginBottom: '2px', marginTop: '2px'}}>
            {users[userId]?.user_name || 'Unknown User'}
          </div>
        )}
      </div>
    );
  };
  
  return (
    <TableCell 
      id={epochTime}
      key={epochTime}
      sx={{ 
        padding: '0',
        backgroundColor: !isOptimal ? '#00A63C' : '#FAC746',
        opacity: opacity,
        border: 1,
        borderColor: '#C1C1C1',
        borderTopStyle: 'dashed',
        borderBottom: isHour ? 1 : 0,
        zIndex: 0
      }}
    >
      <Tooltip placement='left-start' title={generateTooltipTitle()} disableInteractive>
        <StyledDiv />
      </Tooltip>
    </TableCell>
  )
};
