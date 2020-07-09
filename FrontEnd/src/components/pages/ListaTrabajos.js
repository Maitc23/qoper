import React from 'react';
import { Grid } from '@material-ui/core';
import LTContent from './LTContent';

const ListaTrabajos = () => {

    return (
        <Grid container direction="column">
            <Grid item> This is where de header will be </Grid>
            <Grid item container>
                <Grid item xs={false} sm={2} />
                    <Grid item xs={12} sm={8}>
                        <LTContent/>
                    </Grid>
                <Grid />
            </Grid>
        </Grid>
    )
};

export default ListaTrabajos;