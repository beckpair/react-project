import React from 'react';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { useForm } from 'react-hook-form';
import { Button } from '@mui/material';
import { 
    chooseName,
    chooseZodiac,
    chooseArcana,
    chooseElement,
    chooseUpright,
    chooseReversed_,
    chooseGender
 } from '../../redux/slices/rootSlice';
import { Input } from '../sharedComponents/Input';
import { serverCalls } from '../../api';
import { useGetData } from '../../custom-hooks';

interface CardFormProps {
    id?:string;
    data?:{}
}

interface CardState {
    name: string;
    zodiac: string;
    element: string;
    arcana: string;
    upright: string;
    reversed_: string;
    gender: string;
}

export const CardForm = (props:CardFormProps) => {

    const dispatch = useDispatch();
    let { cardData, getData } = useGetData();
    const store = useStore()
    const name = useSelector<CardState>(state => state.name)
    const zodiac = useSelector<CardState>(state => state.zodiac)
    const element = useSelector<CardState>(state => state.element)
    const arcana = useSelector<CardState>(state => state.arcana)
    const upright = useSelector<CardState>(state => state.upright)
    const reversed_ = useSelector<CardState>(state => state.reversed_)
    const gender = useSelector<CardState>(state => state.gender)
    const { register, handleSubmit } = useForm({ })

    const onSubmit = async (data:any, event:any) => {
        console.log(props.id)

        if( props.id!){
            await serverCalls.update(props.id!, data)
            console.log(`Updated:${data} ${props.id}`)
            window.location.reload()
            event.target.reset();
        } else {
            dispatch(chooseName(data.name))
            dispatch(chooseZodiac(data.zodiac))
            dispatch(chooseElement(data.element))
            dispatch(chooseArcana(data.arcana))
            dispatch(chooseUpright(data.upright))
            dispatch(chooseReversed_(data.reversed_))
            dispatch(chooseGender(data.gender))
            await serverCalls.create(store.getState())
            window.location.reload()
        }
    }

    return (
        <div>
            <form onSubmit = {handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="name">Card Name</label>
                    <Input {...register('name')} name="name" placeholder='Name' />
                </div>
                <div>
                    <label htmlFor="zodiac">Zodiac</label>
                    <Input {...register('zodiac')} name="zodiac" placeholder="Zodiac"/>
                </div>
                <div>
                    <label htmlFor="element">Element</label>
                    <Input {...register('element')} name="element" placeholder="Element"/>
                </div>
                <div>
                    <label htmlFor="arcana">Arcana</label>
                    <Input {...register('arcana')} name="arcana" placeholder="Arcana"/>
                </div>
                <div>
                    <label htmlFor="upright">Upright</label>
                    <Input {...register('upright')} name="upright" placeholder="Upright"/>
                </div>
                <div>
                    <label htmlFor="reversed_">Reversed</label>
                    <Input {...register('reversed_')} name="reversed_" placeholder="Reversed"/>
                </div>
                <div>
                    <label htmlFor="Gender">Gender</label>
                    <Input {...register('Gender')} name="Gender" placeholder="Gender"/>
                </div>
                <Button type='submit'>Submit</Button>
            </form>
        </div>
    )
}