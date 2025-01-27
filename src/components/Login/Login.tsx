import { Button } from '@hd/ui';
import Image from 'next/image';
import Link from 'next/link';

export const Login = () => (
  <div className="flex max-w-xl rounded-lg overflow-hidden shadow-xl min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-zinc-950">
    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
      <div className="h-[230px] flex justify-center">
        <Image width={230} height={230} alt="Higly Driven Studio" src="/favicon.ico" />
      </div>
      <h2 className="mt-6 text-center text-2xl/9 font-bold tracking-tight text-zinc-200">
        Sign in to your account
      </h2>
    </div>

    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form action="#" method="POST" className="space-y-6">
        <div>
          <label htmlFor="email" className="block text-sm/6 font-medium text-zinc-300">
            Email address
          </label>
          <div className="mt-2">
            <input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
              className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
            />
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between">
            <label htmlFor="password" className="block text-sm/6 font-medium text-zinc-300">
              Password
            </label>
          </div>
          <div className="mt-2">
            <input
              id="password"
              name="password"
              type="password"
              required
              autoComplete="current-password"
              className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
            />
          </div>
        </div>

        <div>
          <Button type="submit" className="w-full">
            Sign in
          </Button>
        </div>
      </form>

      <p className="mt-10 text-center text-sm/6 text-neutral-100">
        Not a Highly Driven Team member?{' '}
        <Link
          id="link-toHomepage"
          href="/"
          className="font-semibold text-neutral-100 hover:text-neutral-400 underline"
        >
          Go back to homepage
        </Link>
      </p>
    </div>
  </div>
);
