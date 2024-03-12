import PropTypes from 'prop-types';

const ActionLink = (props) => {
  return (
      <button 
        className={props.linkClassName} 
        title={props.linkTitle}
        onClick={ () => props.updateEmployeeDataAfterActionClick({recordId: props.recordId ? props.recordId : 0, action:props.actionType})}
      >
        { props.imageLink ? <img src={props.imageLink} /> : props.linkTitle}
      </button>    
  )
}

ActionLink.propTypes = {
  linkClassName: PropTypes.string,
  linkTitle: PropTypes.string,
  imageLink: PropTypes.string,
  updateEmployeeDataAfterActionClick: PropTypes.func,
  recordId: PropTypes.number,
  actionType: PropTypes.string
}

export default ActionLink