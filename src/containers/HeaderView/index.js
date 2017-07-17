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
  onClose,
  onMinimize,
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
        <div
          onClick={onMinimize}
          className={classnames(styles.button, styles.toggle)}>
          <div className={styles.minimizeIcon}>
            <div className={styles.minimizeIconBar} />
          </div>
        </div>
        <div
          onClick={onClose}
          className={classnames(styles.button, styles.close)}>
          <div className={styles.closeIcon}>
            <div /><div />
          </div>
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
  onClose: PropTypes.func.isRequired,
  onMinimize: PropTypes.func.isRequired,
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
  interaction,
}) {
  return {
    onClickPresenceStatus: () => {
      router.push('/settings?showPresenceSettings=1');
    },
    onClose: interaction.onClose,
    onMinimize: interaction.onMinimize,
  };
}

export default connect(
  mapToProps,
  mapToFunctions
)(HeaderView);
