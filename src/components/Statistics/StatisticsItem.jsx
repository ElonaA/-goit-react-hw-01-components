import PropTypes from "prop-types";
import s from "./Statistics.module.css";
import RandomColor from '../../utils/RandomColor'

export const StatisticsItem = ({ label, percentage = 0}) => {
    return (
       <li className={s.item} style={{ backgroundColor: RandomColor() }}>
            <span className={s.label}>{label} :</span>
            <span className={s.percentage}>{percentage} %</span>
        </li>
    )
}
 

StatisticsItem.propTypes = {
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
}