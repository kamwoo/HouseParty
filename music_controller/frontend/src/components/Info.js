import React, { useState, useEffect } from "react";
import { Grid, Button, Typography, IconButton} from "@material-ui/core";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore"
import NavigateAfterIcon from "@material-ui/icons/NavigateNext";
import {Link} from "react-router-dom";
import NavigateNext from "@material-ui/icons/NavigateNext";

const pages = {
    JOIN: 'page.join',
    CREATE: "page.create"
};

export default function Info(props) {
    const [page, setPage] = useState(pages.JOIN);

    function joinInfo() {
        return "가입";
    }

    function createInfo() {
        return "음악을 공유하고 마음에 드는 곡은 투표해주세요";
    }

    useEffect(() => {
        console.log("ran");
        return () => console.log("cleanup");
    });

    return(
        <Grid container spacing={1}>

            <Grid item xs={12} align="center">
                <Typography component="h4" variant="h4">
                    What is House Party?
                </Typography>
            </Grid>

            <Grid item xs={12} align="center">
                <Typography variant="body1">
                    { page === pages.JOIN ? joinInfo() : createInfo()}
                </Typography>
            </Grid>

            <Grid item xs={12} align="center">
                <IconButton onClick={() => {page === pages.CREATE ? setPage(pages.JOIN): setPage(pages.CREATE); }}>
                    {page === pages.CREATE ? (<NavigateBeforeIcon/>) : (<NavigateNext/>)}
                </IconButton>
            </Grid>

            <Grid item xs={12} align="center">
                <Button color="default" variant="contained" to="/" component={Link}>
                    Back
                </Button>
            </Grid>

        </Grid>
    );
}