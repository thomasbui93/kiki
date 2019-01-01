export interface InterfaceMenuItem {
  key: string,
  title: string,
  url: string,
  children?: InterfaceMenuItem[]
}

export const getMenuItems = (): InterfaceMenuItem[]=> {
  return [
    {
      key: '1',
      title: 'Menu 1',
      url: 'menu-1',
    },
    {
      key: '2',
      title: 'Menu 4',
      url: 'menu-4',
    },
    {
      key: '5',
      title: 'Menu 5',
      url: 'menu-5',
    }
  ]
}
