import styled from 'styled-components'

const TimelineWrapper = styled.div`
    position: relative;
    ::before {
        position: absolute;
        height: 100%;
        width: 1px;
        background-color: #363bd3;
        content: '';
        left: 36px;
    }
`

const TimelineYear = styled.div`
    display: inline-block;
    margin-right: 20px;
    padding: 8px 16px;
    background-color: #363bd3;
    color: white;
`

const TimelineBlackWrapper = styled.div`
    position: relative;
    ::before {
        position: absolute;
        height: 95%;
        width: 1px;
        background-color: #6c6d7a;
        content: '';
        left: 8px;
    }
`

const TimelineBlack = styled.div`
    display: inline-block;
    margin-right: 20px;
    padding: 8px;
    background-color: #6c6d7a;
    color: white;
`

export { TimelineWrapper, TimelineYear, TimelineBlackWrapper, TimelineBlack }
