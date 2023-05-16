import { Paper, Stack, InputBase } from "@mui/material"
// Material Icons
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import IconButton from '@mui/material/IconButton';
// Redux
import { useSelector, useDispatch } from "react-redux";
import { AppState } from "../redux/reducers";
import { useEffect, useState } from "react";
import { DTCart } from "../assets/DataTypes/DTCart";
import { setCantCart } from "../redux/actions/cart";

interface props {
  _id: string
}
function CounterRedux(props: props) {
  let { _id } = props
  const cart = useSelector((state: AppState) => state.cart)
  const dispatch = useDispatch()
  const [cant, setCant] = useState<number>(1)

  useEffect(() => {
    let item = cart.find((elem: DTCart) => elem.product?._id === _id)
    if (item) {
      setCant(item.cant)
    }
  }, [_id, cart])

  useEffect(() => {
    dispatch(setCantCart({ _id, cant }))
  }, [cant])
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

export default CounterRedux