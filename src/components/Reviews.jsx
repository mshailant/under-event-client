import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getReviews } from "../redux/actions/actions";


export default function Reviews () {
    let id = JSON.parse(window.localStorage.getItem('id'))
    console.log(id, "id de reseñas")
    
    const detalles = useSelector(state => state.detailReviews)
    const dispatch = useDispatch()
    console.log(detalles)

    useEffect(()=>{
        dispatch(getReviews(id))
    }, [dispatch])

    return (
        <div>{detalles ? (<div>{detalles.Reviews[0].description}</div>): <h1>error</h1>}</div>
    )
}