import React from 'react'
import Back from '../common/back/Back'
import CoursesCard from './CoursesCard'
import OnllineCouses from './OnllineCouses'
const CourseHome = () => {
    return (
        <>
            <Back title="Explore Courses"/>
            <CoursesCard/>
            <OnllineCouses/>
        </>
    )
}

export default CourseHome
