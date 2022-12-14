import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Review from './review';
import ReviewForm from './review-form';
import styles from './reviews.module.css';

import { loadReviews, loadUsers } from '../../redux/actions';
import {
  reviewsLoadedSelector,
  usersLoadedSelector,
} from '../../redux/selectors';

import Loader from '../loader';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const Reviews = ({
  reviews,
  restId,
  loadReviews,
  loadUsers,
  usersLoaded,
  reviewsLoaded,
}) => {
  useEffect(() => {
    loadUsers();
    loadReviews(restId);
  }, [loadUsers, loadReviews, restId]);

  if (!usersLoaded || !reviewsLoaded) return <Loader />;

  return (
    <div className={styles.reviews}>
      <TransitionGroup  >
       {reviews.map((id) => (
          <CSSTransition key={id} timeout={5000} classNames={ {enter: styles.reviewEnter, enterActive: styles.reviewEnterActive} }>
            <Review id={id} />
          </CSSTransition>
       ))}
       <ReviewForm restId={restId} />
      </TransitionGroup>
    </div>
  );
};

Reviews.propTypes = {
  restId: PropTypes.string,
  reviews: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

const mapStateToProps = (state, props) => ({
  reviewsLoaded: reviewsLoadedSelector(state, props),
  usersLoaded: usersLoadedSelector(state, props),
});

const mapDispatchToProps = { loadReviews, loadUsers };

export default connect(mapStateToProps, mapDispatchToProps)(Reviews);
