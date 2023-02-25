import React from "react";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';


const PaginationEl = (props) => { 

    function Page(e) {
        let page = parseInt(e.target.innerText);
        if(page >= 0){
            props?.state(page)
        }
    }

    return (         
        <Stack spacing={2}>
            <Pagination count={20} onChange={(e) => Page(e)} color="primary"  hidePrevButton hideNextButton />
        </Stack>   
    );
  }
  
  export default PaginationEl;