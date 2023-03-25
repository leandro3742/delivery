import { Paper, Stack, InputBase } from "@mui/material"
// Material Icons
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import IconButton from '@mui/material/IconButton';

interface props {
  cant: number,
  setCant: (cant: number) => void
}
function Counter(props: props) {
  let { cant, setCant } = props

  return (
    <Paper variant={'outlined'} sx={{ borderRadius: '100px' }}>
      <Stack direction={'row'} spacing={1} justifyContent={'center'} alignItems={'center'}  >
        <IconButton size={'small'} onClick={() => setCant(cant - 1)} color={'primary'} disabled={cant > 1 ? false : true}>
          <RemoveIcon />
        </IconButton>
        <InputBase size={'small'} value={cant} color={'primary'} sx={{ width: '40px', input: { textAlign: "center", fontSize: '14px' } }} type={'text'} inputMode="numeric" />
        <IconButton size={'small'} onClick={() => setCant(cant + 1)} color={'primary'} disabled={false}>
          <AddIcon />
        </IconButton>
      </Stack>
    </Paper>
  )
}

export default Counter