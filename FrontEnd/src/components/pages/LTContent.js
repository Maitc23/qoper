import React from 'react';
import LTCard from './LTCard';
import { Grid } from '@material-ui/core';
import LTCardInfo from './LTCardInfo'

const LTContent = () => {
    const getLTCardInfo = (LtInf_Obj) => {
        return (
            <Grid item xs={12} sm={12}>
                <LTCard {...LtInf_Obj} />
            </Grid>
    )
    }
return (
    <Grid container spacing={4}>
            {LTCardInfo.map(LtInf_Obj => getLTCardInfo(LtInf_Obj))}
    </Grid>
    );
};

export default LTContent;