import React from 'react'
import { Link } from 'react-router-dom'
import {
    Form,
    FormGroup,
    Label,
    Input,
    Button

} from 'reactstrap'

export const About = () => {
    return (
        <Form>
            <FormGroup>
                <Label>Name</Label>
                <Input type="text" placeholder="Enter name"></Input>
            </FormGroup>
            <Button className="mt-3" type="submit">submit</Button>
            <Link to="/" className="btn btn-danger ml-2 mt-3">Cancel</Link>
        </Form>
    )
}

export default About
