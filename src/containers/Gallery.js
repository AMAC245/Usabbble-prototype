import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { 
  getGalleryFetching, 
  getAnimatedShots, 
  getGalleryShots 
} from '../reducers/GalleryReducer'
import * as ACTIONS from '../actions/Gallery'
import Loading from '../components/gallery/Loading'
import ImageWrapper from '../components/gallery/ImageWrapper'

class Gallery extends Component {
  componentDidMount() {
    this.props.boundActions.fetchGalleryShots()
  }

  render() {
    const { fetching, shots, animated } = this.props

    if (fetching) return <Loading />

      return (
        <div>
          {shots.map(shot => {
            const { id, images, title } = shot

              return (
                <ImageWrapper
                  key={id}
                  image={images.normal}
                  title={title}
                  gif={shot.animated}
                  animate={e => animated && (e.target.src = images.hidpi)}
                  reset={e => animated && (e.target.src = images.normal)}
                />
              )
          })}
        </div>
      )
  }

}

const mapStateToProps = state => ({
  shots: getGalleryShots(state),
  fetching: getGalleryFetching(state),
  animated: getAnimatedShots(state)
})

const mapDispatchToProps = dispatch => ({
  boundActions: bindActionCreators(ACTIONS, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Gallery)