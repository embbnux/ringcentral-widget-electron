import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classnames from 'classnames';

import styles from './styles.scss';

function HeaderView({
  logo,
  userStatus,
  dndStatus,
  onClickPresenceStatus,
  children,
}) {
  const Logo = logo;
  return (
    <div className={styles.root}>
      <header className={styles.header}>
        <div
          className={
            classnames(
              styles.presence,
              styles[userStatus],
              styles[dndStatus],
            )
          }
          onClick={onClickPresenceStatus}
        >
          <div className={styles.presenceBar} />
        </div>
        <Logo className={styles.logo} />
      </header>
      <div className={styles.container}>
        {children}
      </div>
    </div>
  );
}

HeaderView.propTypes = {
  children: PropTypes.node,
  userStatus: PropTypes.string,
  dndStatus: PropTypes.string,
  onClickPresenceStatus: PropTypes.func.isRequired,
  logo: PropTypes.func.isRequired,
  standAlone: PropTypes.bool,
};

HeaderView.defaultProps = {
  children: undefined,
  userStatus: null,
  dndStatus: null,
  standAlone: false,
};

function mapToProps(_, {
  presence,
  auth,
}) {
  return {
    userStatus: (auth.loggedIn && presence.userStatus) || undefined,
    dndStatus: (auth.loggedIn && presence.dndStatus) || undefined,
  };
}

function mapToFunctions(_, {
  router,
}) {
  return {
    onClickPresenceStatus: () => {
      router.push('/settings?showPresenceSettings=1');
    },
  };
}

export default connect(
  mapToProps,
  mapToFunctions
)(HeaderView);
