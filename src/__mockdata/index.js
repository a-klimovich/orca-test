const info = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAANBSURBVDjLXZNrSFNhGMcPQQQRfYv60meJoiCtROuDZRcEA6MP3ckwS0tlZVlptnXRqavMaqZ5Ka1Jq1bOmWiXs466mqZzLs0103CmLp27HOdlaf+es2xFL/xe/jzv8/+/vA/nMACYsWpmDiEmjEQTMU+o/wvVFs+e64mAP3XGoWLmEtljzXv7vSMsXM37bHp1ZEPyK6+WsM+ifa+O4tyGuJHxzjQ79euJpb4AWwWT6tLv/zY1VI3hd9GOD8oQXtowglvNNhS3DfoQ9DWuB23K1R6nSeLh205+J18LMZex3mPOu41p9qH6aIfuQciPvHd9eGQcgIL7CrmqA3mPO3DvdQ8Uhn6UvGXxSb11Ztz6eHro+TIzeQOYLwXMhq7C+ebGopWebLYHFfo+qNhedFtdGHHxGHaNwdznQnldN0rqe/GoUgajIniys3BhK3kDfINILq7KSXlqQmFDL5R0m7BGnU58/jaICdIC/E/gjqYbcq0F6UoO8aW6K74ZCNveghbtqScm3Kkxo5Nu9vz4Cd7jwe2SUtgoyD05iae1b8B9diJT2Q6hV/D4A3bmcnaRohVZD42wjXsxOjmDKTo4K5bggaoSKRckqNPpwQ5acEKuh9ArePwB2zNr7LFFeohLDejjvRQyA6vTjcuyqz4zZ2hHWtMJiOpjkfDmEGLL1BA8/oBt6U+0u66zkJS34K3FiQF6tNXtxQttI3rsLgxNAymNiSjvzsfVVgkSa2MQmXWrxR8Qduq+OEL8HEl3dZAqzRimgY16AfcMQdpBASfZeJSY81BMSBpTEK3cjUj55rW+gNAEeRDRseV8FUQFHLKUXTD0OsDTPHiPF0bShyujkd8hwyXDaeR9lCK57hjCczb8/dbXHpYdiZOWe8LPPMMB2UuIbnJIvtEA0fV6HM9lsU+xG7ntGTjXlIgc40UkaGKwXrxmwh+g0+nCTCYTXrPcdOixIqw5rsC6JJUPQe+4G4Ws1guQGtIRrz6EkPQgb+Dplb+foNFoFhG8xWKBuqrKvmpPmmTFrlQtYZ9FG3Fj84Sk6QyOVh5EcGogDmTv2eEfYllZ2QKii5gilv//KwtslIaORuRuQvC5QEjzM4apb4lQ/wXCx9fe4QKeWQAAAABJRU5ErkJggg=='

export const data = [
  {
    status: "High",
    name: "Luctus",
    file: {
      name: "Luctus.ppt",
      size: "2Mb",
    },
    ipV4: "38.21.46.43/5",
    ipV6: "2855:93c2:2469:6cde:643b:e139:6aae:6e00",
    sourceLink: "https://dropbox.com/nulla/dapibus.xml",
    key: "1",
    additionalInfo: info
  },
  {
    status: "Medium",
    name: "Ante",
    file: {
      name: "Ante.tiff",
      size: "10Mb",
    },
    ipV4: "75.128.66.66/28",
    ipV6: "efcd:8153:a72c:7e0e:4200:896d:74d:bac1",
    sourceLink: "https://ow.ly/curae.aspx",
    key: "2",
    additionalInfo: info
  },
  {
    status: "Medium",
    name: "ElitProinInterdum",
    file: {
      name: "ElitProinInterdum.xls",
      size: "3Mb",
    },
    ipV4: "204.200.5.2/1",
    ipV6: "a454:1732:7eeb:b137:a1d:9d52:813b:506e",
    sourceLink: "http://google.com/sit.aspx",
    key: "3",
    additionalInfo: info
  },
  {
    status: "Low",
    name: "Non",
    file: {
      name: "Non.ppt",
      size: "536Kb",
    },
    ipV4: "127.234.110.193/28",
    ipV6: "efcd:8153:a72c:7e0e:4200:896d:74d:bac1",
    sourceLink: "http://hex.com/pede.json",
    key: "4",
    additionalInfo: info
  },
];

export const dropdownList = {
  download: [
    {
      label: 'Document',
      value: 'Document',
    },
    {
      label: 'Image',
      value: 'Image',
    },
    {
      label: 'PDF',
      value: 'PDF',
    },
    {
      label: 'HTML',
      value: 'HTML',
    },
  ],
  sort: [
    {
      label: 'Name',
      value: 'Name',
    },
    {
      label: 'File name',
      value: 'File name',
    },
    {
      label: 'IP Address v4',
      value: 'IP Address v4',
    },
    {
      label: 'IP Address v6',
      value: 'IP Address v6',
    },
    {
      label: 'Scan source',
      value: 'Scan source',
    },
  ],
  group: [
    {
      label: 'Name',
      value: 'Name',
    },
    {
      label: 'File name',
      value: 'File name',
    },
    {
      label: 'IP Address v4',
      value: 'IP Address v4',
    },
    {
      label: 'IP Address v6',
      value: 'IP Address v6',
    },
    {
      label: 'Scan source',
      value: 'Scan source',
    },
  ],
}