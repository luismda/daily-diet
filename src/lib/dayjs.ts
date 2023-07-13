import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat'
import ptBR from 'dayjs/locale/pt-br'

dayjs.locale(ptBR)
dayjs.extend(customParseFormat)
