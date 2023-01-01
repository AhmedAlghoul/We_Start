<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>One to One</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
<div class="container mt-5">
    <h2>All users</h2>
    <table class="table table-bordered">
        <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Image</th>
            <th>Date of Birth</th>
        </tr>
        @foreach ($users as $user)

        <tr>
                <td>{{$user->id}}</td>
                <td>{{$user->name}}</td>
                <td>{{$user->email}}</td>
                <td>{{$user->profile->image }}</td>
                {{-- <td>{{$user->profile ? $user->profile->image : ' '}}</td> --}}
                {{-- another way to solve the problem of not finding profile for user --}}
                {{-- <td>{{$user->profile ?? ' '}}</td> --}}
                {{-- <td>{{$user->profile ? $user->profile->dob : ' '}}</td> --}}
                <td>{{ $user->profile->dob}}</td>
        </tr>
        @endforeach
    </table>

</div>

</body>
</html>
