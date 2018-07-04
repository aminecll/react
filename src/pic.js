import React, { Component } from 'react';

import Gallery from 'react-photo-gallery';

export default class Pic extends React.Component {
    render() {
    return (
        <div className="col-xs-6 col-sm-4 col-md-12">
        <Gallery photos={PHOTO_SET} />
        </div>
    );
    }
}
const PHOTO_SET = [
  {
    src: '/images/2.jpeg',
    width: 4,
    height: 3
  },
  {
    src: '/images/1.jpeg',
    width: 1,
    height: 1
  }
,{
  src: '/images/3.jpeg',
    width: 4,
    height: 3
  },
  {
    src: '/images/4.jpeg',
    width: 1,
    height: 1
  },
  {
  src: '/images/1.jpeg',
    width: 4,
    height: 3
  },
  {
    src: '/images/3.jpeg',
    width: 1,
    height: 1
  }
];