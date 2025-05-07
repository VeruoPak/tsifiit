import React, { PureComponent } from 'react'

class Header extends PureComponent {
    
    render() {
        return (
            <div className="bg-fuchsia-300 py-2.5">
            <div>
                <a href='/' className='bg-amber-50 text-2xl'>Главная </a>
                <a href='/blog' className='bg-amber-50 text-2xl'>Блог </a>
                <a href='/about' className='bg-amber-50 text-2xl'> О нас </a>
                <a href='/cart' className='bg-amber-50 text-2xl'>Корзина </a>
            </div>
            </div>
        )
    }
}

export default Header