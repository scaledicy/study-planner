import React from 'react'
import BaseLayout from 'components/BaseLayout/BaseLayout'
import Lessons from './Lessons/Lessons'

const Dashboard: React.FC = () => {
  return (
    <BaseLayout>
      <Lessons />
    </BaseLayout>
  )
}

export default Dashboard
