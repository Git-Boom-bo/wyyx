import ajax from 'ajax'
//主页
export const reqIndexData = () => ajax('/indexdata')
// 分类
export const reqListData = () => ajax('/getcategorydatas')
