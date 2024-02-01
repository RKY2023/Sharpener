import React from "react";
import { Stack, Button } from 'react-bootstrap';

const AppTest = (props) => {
    return (
        <>
        {/* <Stack direction="horizontal" gap={2}> */}
            <Button as="a" variant="primary">
                Button as link
            </Button>
            <Button as="a" variant="success">
                Button as link
            </Button>
        {/* </Stack>; */}
        </>
    )
}

export default AppTest;