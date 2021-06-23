import React from "react"
import { useDispatch, useSelector } from 'react-redux'
import { newsActions } from '../../../redux/actions'
import { Loading, MainLayout } from "../../../Components"
import { New } from '../Components'

export const News = () => {
  const dispatch = useDispatch()
  const { loading: { loading }, news: { news } } = useSelector(state => state)

  React.useEffect(() => {
    dispatch(newsActions.fetchNews())
  }, [ dispatch ])

  if (loading) return <Loading />

  return <MainLayout>
    <h1>News</h1>
    { news.map(i => <New key={ i.id } title={ i.title } body={ i.body } />) }
  </MainLayout>
}