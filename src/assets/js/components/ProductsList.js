import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
`;
const Card = styled.div`

`;
const Cover = styled.img`
    border: 1px solid #000;
    width: 200px;
    height: 200px;
`;

class ProductsList extends Component {
    state = {
        author: 'Gerardo Nava'
    }
    render(){
        const {cover, title, author} = this.props
        return (
            <Container>
                <Card className="Media-cover">
                    <Cover
                        src={cover}
                        alt=""
                        width={260}
                        height={160}
                        className="Media-image"
                    />
                    <h3 className="Media-title">{title}</h3>
                    <p className="Media-author">{author}</p>
                </Card>
            </Container>
        )
    }
}

export default ProductsList;