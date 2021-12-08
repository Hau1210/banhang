import React from 'react';

const Trademake = () => {
    return (
        <div>
            <div className="banner-productHot" >
          <div >
            <h4 > SẢN PHẨM HOT </h4> </div >
          <Carousel >
            <Carousel.Item >
              <div className="tab_1" >
                <Card style={
                  {
                    width: '18rem'
                  }
                }>
                    <Card.Img variant="top" src={kemCN} />
                  <Card.Body >
                    <Card.Title > Kem chống nắng </Card.Title>
                    <Card.Text >Some quick example text to build on the card title and make up the bulk ofthe card 's content. </Card.Text >
                    <Button variant="primary" > Buy now </Button> </Card.Body > </Card>
                <Card style={{ width: '18rem' }} >
                  <Card.Img variant="top" src={duongda} />
                  < Card.Body >
                    <Card.Title > Card Title </Card.Title>
                    <Card.Text >Some quick example text to build on the card title and make up the bulk of the card 's content. </Card.Text >
                    <Button variant="primary" > Buy now </Button> </Card.Body > </Card>
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={kemCN} />
                  <Card.Body >
                    <Card.Title > Card Title </Card.Title>
                    <Card.Text >Some quick example text to build on the card title and make up the bulk of the card 's content. </Card.Text >
                    <Button variant="primary" > Buy now </Button> </Card.Body> </Card>
                <Card style={{ width: '18rem' }} >
                  <Card.Img variant="top" src={kemTriMun} />
                  <Card.Body >
                    <Card.Title > Card Title </Card.Title>
                    <Card.Text >Some quick example text to build on the card title and make up the bulk of the card 's content. </Card.Text >
                    <Button variant="primary" > Go somewhere </Button> </Card.Body > </Card> </div >
              <Carousel.Caption >
                <p > Nulla vitae elit libero,a pharetra augue mollis interdum. </p> </Carousel.Caption > </Carousel.Item>
            < Carousel.Item >
              <div className="tab_1" >
                <Card style={{ width: '18rem' }} >
                  <Card.Img variant="top" src={kemCN} />
                  <Card.Body >
                    <Card.Title > Card Title </Card.Title>
                    <Card.Text >Some quick example text to build on the card title and make up the bulk of the card 's content. </Card.Text >
                    <Button variant="primary" > Go somewhere </Button> </Card.Body > </Card>
                <Card style={{ width: '18rem' }} >
                  <Card.Img variant="top" src={duongda} />
                  < Card.Body >
                    <Card.Title > Card Title </Card.Title>
                    <Card.Text >Some quick example text to build on the card title and make up the bulk of the card 's content. </Card.Text >
                    <Button variant="primary" > Go somewhere </Button> </Card.Body > </Card>
                < Card style={{ width: '18rem' }} >
                  <Card.Img variant="top" src={kemCN} />
                  <Card.Body >
                    <Card.Title > Card Title </Card.Title>
                    <Card.Text >Some quick example text to build on the card title and make up the bulk of the card 's content. </Card.Text >
                    <Button variant="primary" > Go somewhere </Button> </Card.Body > </Card>
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={kemTriMun} />
                  <Card.Body >
                    <Card.Title > Card Title </Card.Title>
                    <Card.Text >Some quick example text to build on the card title and make up the bulk of the card 's content. </Card.Text >
                    <Button variant="primary" > Go somewhere </Button> </Card.Body > </Card> </div > </Carousel.Item>
            <Carousel.Item >
              <div className="tab_1" >
                <Card style={{ width: '18rem' }} >
                  < Card.Img variant="top" src={kemCN} />
                  <Card.Body >
                    <Card.Title > Card Title </Card.Title>
                    <Card.Text >Some quick example text to build on the card title and make up the bulk ofthe card 's content. </Card.Text >
                    <Button variant="primary" > Go somewhere </Button> </Card.Body > </Card>
                <Card style={{ width: '18rem' }} >
                  <Card.Img variant="top" src={duongda} />
                  <Card.Body >
                    <Card.Title > Card Title </Card.Title>
                    <Card.Text >Some quick example text to build on the card title and make up the bulk of the card 's content. </Card.Text >
                    <Button variant="primary" > Go somewhere </Button> </Card.Body > </Card>
                <Card style={{ width: '18rem' }} >
                  <Card.Img variant="top" src={kemCN} />
                  <Card.Body >
                    <Card.Title > Card Title </Card.Title>
                    <Card.Text >Some quick example text to build on the card title and make up the bulk of  the card 's content. </Card.Text >
                    <Button variant="primary" > Go somewhere </Button> </Card.Body > </Card>
                <Card style={{ width: '18rem' }} >
                  <Card.Img variant="top" src={kemTriMun} />
                  <Card.Body >
                    <Card.Title > Card Title </Card.Title>
                    <Card.Text >Some quick example text to build on the card title and make up the bulk of the card 's content. </Card.Text >
                    <Button variant="primary" > Go somewhere </Button> </Card.Body > </Card> </div> </Carousel.Item> </Carousel > </div>
        </div>
    );
}

export default Trademake;
