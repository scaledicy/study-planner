import React from 'react'
import BaseLayout from 'components/BaseLayout/BaseLayout'
import Lessons from './Lessons/Lessons'

const Dashboard: React.FC = () => {
  return (
    <BaseLayout>
      <h1>Dashboard component</h1>
      <Lessons />
    </BaseLayout>
  )
}

export default Dashboard
