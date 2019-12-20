import React from 'react';
import { Button, Form, FormGroup, Label, Input, Col, FormFeedback } from 'reactstrap';

class Savings extends React.Component {
    /* constructor(props) {
        super(props);
    
    this.state {
        
      };
    } */

    render() {
        return (
            <div className="container">
                <div className="row">
                    <Col>
                        <h3>Savings</h3>
                        <hr />
                    </Col>
                    <Col>
                        <Form>
                            <FormGroup row>

                            </FormGroup>
                        </Form>
                    </Col>
                </div>
            </div>
        );
    }

}

export default Savings;