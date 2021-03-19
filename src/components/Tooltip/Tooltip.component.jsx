import { withStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';

const CustomTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: '#111',
    color: 'rgba(0, 0, 0, 0.87)',
    maxWidth: 500,
    fontSize: theme.typography.pxToRem(12),
  },
}))(Tooltip);

export default CustomTooltip;