'use client'

import { useState } from 'react'
import { SearchListParams } from '../types/search.type'

export const [listParams, setListParams] = useState<SearchListParams>({query: '아디다스', display: 40, sort: 'sim'})