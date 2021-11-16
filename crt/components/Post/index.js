
import { Box, Paper, Typography } from "@mui/material";
import Image from 'next/image';
import marked from 'marked';


export default function Post (props) {
    const {post} = props;
    
    const stations = [
        {
            html: "h1",
            content: 'Test'
        },
        {
            html: "h2",
            content: 'Test'
        }
    ];

    const Test = (markedLexerOutput) => (
        <div>
          {markedLexerOutput.map((object, index) => {
              switch(object.type) {
                    case "paragraph":
                        return (<Typography variant="body1" key={object.type + index.toString()}>{object.text}</Typography>)
                    case "heading":
                        if (object.depth >= 5) return (<Typography variant="body1" key={object.type + index.toString()}><strong>{object.text}</strong></Typography>);
                        let newDepth = object.depth + 2;
                        return (<Typography variant={"h" + newDepth.toString()} component={"h" + object.depth.toString()} gutterBottom key={object.type + index.toString()}>{object.text}</Typography>)
                    default:
                        return;
              }
            })}
        </div>
      );
    
    
      const lexerText = '## This will be a Markdown H2';
      const lexed = marked.lexer(post.content);
      console.log(lexed, Test(lexed));

    return (
        <Box mt={2} >
            <Paper elevation={6}>
                <Typography variant="h2" component="h1">
                    {post.title}
                </Typography>
                               
                {Test(lexed)}

            </Paper>
        </Box>
    );
}