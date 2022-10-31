import { 
    Box, 
    useTheme, 
    Accordion, 
    AccordionSummary, 
    AccordionDetails, 
    Typography 
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { tokens } from '../../theme';
import Header from '../../components/Header';

const FAQ = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Box m="20px">
            <Header title="FAQ" subtitle="Frequently Asked Questions Page" />
            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        An Important Question
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    Lorem ipsum dolor sit amet adiscpiin init. Init desare unital geopaleto.
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        Another Important Question
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    Lorem ipsum dolor sit amet adiscpiin init. Init desare unital geopaleto.
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        Your Favourite Question
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    Lorem ipsum dolor sit amet adiscpiin init. Init desare unital geopaleto.
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        Any Random Question
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    Lorem ipsum dolor sit amet adiscpiin init. Init desare unital geopaleto.
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        The Final Question
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    Lorem ipsum dolor sit amet adiscpiin init. Init desare unital geopaleto.
                </AccordionDetails>
            </Accordion>
            
            
        </Box>
    )

}

export default FAQ;
