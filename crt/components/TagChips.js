import React from "react";
import { Box } from "@mui/system";
import { Chip } from "@mui/material";

const TagChips = (props) => {
    const { tags } = props;
    
    return (
        <Box mb={1}>
            {tags.map((tag, index) => (  
                <Chip key={tag + index.toString()} 
                    size="small" 
                    variant="outlined"
                    color="tertiary" 
                    label={tag}
                    sx={{mr:1}} 
                />
            ))}
        </Box>
    );
}

export default TagChips;