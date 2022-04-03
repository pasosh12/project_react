import React from "react";
import Preloader from "../common/Preloader";

export const SuspenseComponentHOC = (Component) => {
    return (
        <React.Suspense fallback={<Preloader/>}>
            <Component/>
        </React.Suspense>
    )
}
