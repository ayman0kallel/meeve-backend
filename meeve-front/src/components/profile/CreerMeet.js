import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Layout from '../Layout/Layout';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Typography from '@mui/material/Typography';
import AddBoxIcon from '@mui/icons-material/AddBox';
import Button from '@mui/material/Button';

//date
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
//heure
import dayjs from 'dayjs';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import "../../style/profile/CreerMeet.css";
//place
import Box from '@mui/material/Box';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Grid from '@mui/material/Grid';
import parse from 'autosuggest-highlight/parse';
import { debounce } from '@mui/material/utils';

const GOOGLE_MAPS_API_KEY = 'AIzaSyCPGSHVtCPu2WInyU8cHwsLxhTUnfSqD4E';

// Place api google maps
function loadScript(src, position, id) {
  if (!position) {
    return;
  }

  const script = document.createElement('script');
  script.setAttribute('async', '');
  script.setAttribute('id', id);
  script.src = src;
  position.appendChild(script);
}

const autocompleteService = { current: null };

const theme = createTheme({
    typography: {
      fontFamily: 'Roboto, sans-serif',
    },
    palette: {
      primary: {
        light: '#1ccf90',
        main: '#1ccf90',
        dark: '#1ccf90',
        contrastText: '#fff',
      },
      secondary: {
        light: '#2d2d2d',
        main: '#2d2d2d',
        dark: '#2d2d2d',
        contrastText: '#000',
      },
      tertiary: {
        light: '#fffbf1',
        main: '#fffbf1',
        dark: '#fffbf1',
        contrastText: '#000',
      },
    },
  });

// Sports
const sports = [
  { label: 'Fitness'},
  { label: 'Abdos'},
  { label: 'Streching'},
  { label: 'Musculation'},
  { label: 'Boxe'},
  { label: 'Danse Classique'},
  { label: 'Danse Orientale'},
];

  const CreerMeet = () => {
    //heure
    const [value, setValue] = React.useState(dayjs('2022-04-17T15:30'));
    // google maps
    const [valueM, setValueM] = React.useState(null);
    const [inputValue, setInputValue] = React.useState('');
    const [options, setOptions] = React.useState([]);
    const loaded = React.useRef(false);

    if (typeof window !== 'undefined' && !loaded.current) {
      if (!document.querySelector('#google-maps')) {
        loadScript(
          `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}&libraries=places`,
          document.querySelector('head'),
          'google-maps',
        );
      }
  
      loaded.current = true;
    }

    // fetch places
    const fetch = React.useMemo(
      () =>
        debounce((request, callback) => {
          autocompleteService.current.getPlacePredictions(request, callback);
        }, 400),
      [],
    );

    React.useEffect(() => {
      let active = true;
  
      if (!autocompleteService.current && window.google) {
        autocompleteService.current =
          new window.google.maps.places.AutocompleteService();
      }
      if (!autocompleteService.current) {
        return undefined;
      }
  
      if (inputValue === '') {
        setOptions(valueM ? [valueM] : []);
        return undefined;
      }
  
      fetch({ input: inputValue }, (results) => {
        if (active) {
          let newOptions = [];
  
          if (valueM) {
            newOptions = [valueM];
          }
  
          if (results) {
            newOptions = [...newOptions, ...results];
          }
  
          setOptions(newOptions);
        }
      });
  
      return () => {
        active = false;
      };
    }, [valueM, inputValue, fetch]);



    return (
      <Layout>
        <ThemeProvider theme={theme}>
            <div className='creetMeetContainer'>
              <section className='logo'>
                <img src='' alt='logo Meet'></img>
              </section>
              <section className='creerMeetFormContainer'>
                <form className='creerMeetForm'>
                <Typography variant="h6" className='mCreerTitle' >
                  Créer Nouveau Meet
                </Typography>
                <Typography variant="body2" className='cMeetPrincipalInfo' >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget 
                </Typography>
                <Autocomplete
                  disablePortal
                  id="combo-box-demo"
                  options={sports}
                  sx={{ width: 300 }}
                  renderInput={(params) => <TextField {...params} label="Sport" />}
                />
                <section className='datePickerContainer'>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DemoContainer components={['DatePicker']}>
                        <DatePicker label="Date" />
                      </DemoContainer>
                    </LocalizationProvider>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={['TimePicker', 'TimePicker']}>
                      <TimePicker
                        label="Heure"
                        value={value}
                        onChange={(newValue) => setValue(newValue)}
                      />
                    </DemoContainer>
                  </LocalizationProvider>
                </section>
                <Autocomplete
                    id="google-map-demo"
                    sx={{ width: 300 }}
                    getOptionLabel={(option) =>
                      typeof option === 'string' ? option : option.description
                    }
                    filterOptions={(x) => x}
                    options={options}
                    autoComplete
                    includeInputInList
                    filterSelectedOptions
                    value={valueM}
                    noOptionsText="Ne pas trouvé"
                    onChange={(event, newValue) => {
                      setOptions(newValue ? [newValue, ...options] : options);
                      setValueM(newValue);
                    }}
                    onInputChange={(event, newInputValue) => {
                      setInputValue(newInputValue);
                    }}
                    renderInput={(params) => (
                      <TextField {...params} label="Lieu" fullWidth />
                    )}
                    renderOption={(props, option) => {
                      const matches =
                        option.structured_formatting.main_text_matched_substrings || [];

                      const parts = parse(
                        option.structured_formatting.main_text,
                        matches.map((match) => [match.offset, match.offset + match.length]),
                      );

                      return (
                        <li {...props}>
                          <Grid container alignItems="center">
                            <Grid item sx={{ display: 'flex', width: 44 }}>
                              <LocationOnIcon sx={{ color: 'text.secondary' }} />
                            </Grid>
                            <Grid item sx={{ width: 'calc(100% - 44px)', wordWrap: 'break-word' }}>
                              {parts.map((part, index) => (
                                <Box
                                  key={index}
                                  component="span"
                                  sx={{ fontWeight: part.highlight ? 'bold' : 'regular' }}
                                >
                                  {part.text}
                                </Box>
                              ))}
                              <Typography variant="body2" color="text.secondary">
                                {option.structured_formatting.secondary_text}
                              </Typography>
                            </Grid>
                          </Grid>
                        </li>
                      );
                    }}
                  />
                            <section className='submitCreerunMeet'>
                            <Button variant="contained" endIcon={<AddBoxIcon />}>
                              Créer un Meet
                            </Button>
                            </section>
                </form>
              </section>
            </div>
        </ThemeProvider>
      </Layout>
    );
  };


  
  export default CreerMeet;
  