import NextLink from 'next/link';
import { Button } from '@mui/material';

const MuiNextButton = (props) => {
    if (props.deactivate) return (
        <NextLink href={props.href} passHref>
            <Button color={props.color} disabled>{props.btnText}</Button>
        </NextLink>
    );
    
    return (
        <NextLink href={props.href} passHref>
            <Button color={props.color}>{props.btnText}</Button>
        </NextLink>
    );
}

export default MuiNextButton;